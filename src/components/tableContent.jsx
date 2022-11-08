import React from "react";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";

export const TableContent = ({
  moviesArr,
  handleLike,
  deleteRaw,
  restoreData,
}) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {moviesArr &&
            moviesArr.map((movie) => {
              return (
                <tr key={movie.id}>
                  <th scope="row">{movie.id}</th>
                  <td>{movie.title}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.stock}</td>
                  <td>{movie.rate}</td>
                  <td>
                    {movie.isLike ? (
                      <div
                        onClick={() => {
                          handleLike(movie.id, false);
                        }}
                      >
                        <FavoriteTwoToneIcon />
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          handleLike(movie.id, true);
                        }}
                      >
                        <FavoriteBorderTwoToneIcon />
                      </div>
                    )}
                  </td>

                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        deleteRaw(movie.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button
        type="button"
        className="btn  btn-success"
        onClick={() => {
          restoreData();
        }}
      >
        Restore DATA
      </button>
    </div>
  );
};
