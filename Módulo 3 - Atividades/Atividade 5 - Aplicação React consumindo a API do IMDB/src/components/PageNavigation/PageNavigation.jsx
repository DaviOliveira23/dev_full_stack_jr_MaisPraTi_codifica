import './PageNavigation.css';

const PageNavigation = ({ currentPage, totalPages, setCurrentPage }) => {

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    
    return (
        <div className='navigation-container'>
            {totalPages > 0 && (
                <>
                    <button className='btn-before btn-navigation' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        Anterior
                    </button>
                    <span>Página {currentPage} de {totalPages}</span>
                    <button className='btn-after btn-navigation' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        Próxima
                    </button>
                </>
            )}
        </div>
    );
};


export default PageNavigation;