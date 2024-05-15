import React, { useCallback, useEffect, useState } from "react";

interface AddStudentModalProps {
  onClose: () => void;
  onSave: (student: Student) => void;
}
interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
  }
  
  const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) {
      return null;
    }

const AddStudentModal: React.FC<AddStudentModalProps> = ({ onClose, onSave }) => {
  const [newStudent, setNewStudent] = useState<Student>({
    id: uuidv4(),
    name: "",
    birthdate: "",
    email: "",
    status: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(newStudent);
    onClose();
  };
  interface SearchInputProps {
    onSearch: (term: string) => void;
  }
  
  const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
    const [term, setTerm] = useState("");
  
    const debouncedSearch = useCallback(debounce(onSearch, 300), []);
  
    useEffect(() => {
      return () => {
        debouncedSearch.cancel();
      };
    }, [debouncedSearch]);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newTerm = e.target.value;
      setTerm(newTerm);
      debouncedSearch(newTerm);
    };
    interface StudentListProps {
        students: Student[];
        addStudent: (student: Student) => void;
        updateStudent: (student: Student) => void;
        deleteStudent: (studentId: string) => void;
      }
      
      const StudentList: React.FC<StudentListProps> = ({ students = [], addStudent, updateStudent, deleteStudent }) => {
        const [currentPage, setCurrentPage] = useState(1);
        const [studentsPerPage] = useState(10);
        const [searchTerm, setSearchTerm] = useState("");
        const [showAddModal, setShowAddModal] = useState(false);
        const [showEditModal, setShowEditModal] = useState(false);
        const [showConfirmationModal, setShowConfirmationModal] = useState(false);
        const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
      
        const indexOfLastStudent = currentPage * studentsPerPage;
        const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
      
        const filteredStudents = (students ?? []).filter((student) => {
          const normalizedSearchTerm = searchTerm.toLowerCase();
          return (
            student.name.toLowerCase().includes(normalizedSearchTerm) ||
            student.email.toLowerCase().includes(normalizedSearchTerm)
          );
        });
      
        const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);
      
        const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
      
        const handleSearch = (term: string) => {
          setSearchTerm(term);
          setCurrentPage(1);
        };
      
        const handleAddStudent = () => {
          setShowAddModal(true);
        };
      
        const handleEditStudent = (student: Student) => {
          setSelectedStudent(student);
          setShowEditModal(true);
        };
      
        const handleDeleteStudent = (student: Student) => {
          setSelectedStudent(student);
          setShowConfirmationModal(true);
        };
      
        const confirmDeleteStudent = () => {
          if (selectedStudent) {
            deleteStudent(selectedStudent.id);
            setSelectedStudent(null);
            setShowConfirmationModal(false);
          }
        };
      
        return (

  return (
    
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          ×
        </span>
        <h2>Thêm mới sinh viên</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Tên:
            <input type="text" name="name" value={newStudent.name} onChange={handleChange} />
          </label><br />
          <label>
            Ngày sinh:
            <input type="date" name="birthdate" value={newStudent.birthdate} onChange={handleChange} />
          </label><br />
          <label>
            Email:
            <input type="email" name="email" value={newStudent.email} onChange={handleChange} />
          </label><br />
          <label>
            Trạng thái:
            <select name="status" value={newStudent.status} onChange={handleChange}>
              <option value="">Chọn trạng thái</option>
              <option value="active">Đang học</option>
              <option value="inactive">Đã nghỉ</option>
            </select>
          </label><br />
          <button type="submit">Thêm mới</button>
          <button type="button" onClick={onClose}>Hủy</button>
        </form>
      </div>
      <div>
      <input
        type="text"
        placeholder="Tìm kiếm theo tên hoặc email"
        value={term}
        onChange={handleChange}
      />
    </div>
    </div>
    
  );
};

export default AddStudentModal;

function debounce(onSearch: (term: string) => void, arg1: number): any {
          throw new Error("Function not implemented.");
      }
