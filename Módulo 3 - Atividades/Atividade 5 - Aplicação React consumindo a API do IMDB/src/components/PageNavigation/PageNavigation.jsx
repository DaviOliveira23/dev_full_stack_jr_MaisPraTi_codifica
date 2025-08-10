
const PageNavigation = ({ currentPage, totalPages, setCurrentPage }) => {

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    
    return (
        <div>
            {totalPages > 0 && (
                <>
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        Anterior
                    </button>
                    <span>Página {currentPage} de {totalPages}</span>
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        Próxima
                    </button>
                </>
            )}
        </div>
    );
};


export default PageNavigation;