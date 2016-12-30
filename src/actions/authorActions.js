import * as types from './actionTypes';
import courseApi from '../api/mockCourse';

export function loadAuthorSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
    dispatch => {
        return courseApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}
