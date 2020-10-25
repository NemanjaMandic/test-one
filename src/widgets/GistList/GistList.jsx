import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  selectGists,
  selectProgress,
  selectError,
} from "../../state/gists/selectors";
import Loader from "../../components/Loader";
import ListItem from "../../components/ListItem";
import Pagination from "../../components/Pagination";
import ErrorMessage from "../../components/ErrorMessage";
import { Container } from "./style";

const GistList = ({ data, error, isLoading, getGists }) => {
  const [page, setPage] = useState(1);
  const [active, setActive] = useState();

  useEffect(() => {
    getGists(page);
  }, [getGists, page]);

  const goToNextPage = () => {
    setPage((prevState) => prevState + 1);
  };
  const goToPreviousPage = () => {
    if (page <= 1) {
      setPage(1);
    } else {
      setPage((prevState) => prevState - 1);
    }
  };

  const setClass = (event) => {
    setActive(event.target.id);
  };

  return (
    <Container>
      {isLoading && <Loader />}
      {error && (
        <ErrorMessage
          message="Uh-oh, some error occured"
          buttonLabel="Please try again"
          onClick={() => window.location.reload()}
        />
      )}
      {!isLoading && !error && data && (
        <>
          {data.map((gist) => {
            const { avatar_url } = gist.owner;
            const fileName = Object.keys(gist.files)[0];
            return (
              <ListItem
                id={gist.id}
                key={gist.id}
                active={active === gist.id}
                avatar={avatar_url}
                fileName={fileName}
                onClick={setClass}
              />
            );
          })}
          <Pagination
            prev={goToPreviousPage}
            next={goToNextPage}
            disabled={page === 1}
          />
        </>
      )}
    </Container>
  );
};

export const mapStateToProps = (state) => {
  return {
    data: selectGists(state),
    isLoading: selectProgress(state),
    error: selectError(state),
  };
};

GistList.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default GistList;
