import ReactPaginate from 'react-paginate';
import { DivStyled } from './Pagination.styled';

export const Pagination = ({ pagecount, onChange, page }) => {
  const handleChange = event => {
    onChange(event.selected + 1);
  };

  return (
    <DivStyled>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        initialPage={page - 1}
        breakClassName={'break-me'}
        pageCount={pagecount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handleChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </DivStyled>
  );
};
