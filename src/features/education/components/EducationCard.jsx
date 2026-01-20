import CourseTable from "./CourseTable";

const EducationCard = ({ title, tableData }) => {
    return (
        <div className="col-12 col-lg-6">
            <div className="card border-0 h-100 rounded-3 shadow-sm">
                <h2 className="mt-3 mb-0">{title}</h2>
                <div className="card-body d-flex flex-column">
                    <CourseTable tableData={tableData} />
                    <div className="d-flex align-items-center mt-3 text-bs-purple mt-auto">
                        <span className="bi bi-bootstrap-fill fs-2 me-2"></span>
                        <span>Bootstrap 5</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;
