const BASE_URL = 'http://127.0.0.1:8000/api/Comments';

const fetchCommentByID = async (CommentID) => {
  const response = await fetch(`${BASE_URL}/${CommentID}`);
  const data = await response.json();
  return data;
};

const fetchCommentsByResort = async (resortID) => {
  const response = await fetch(`http://127.0.0.1:8000/api/resorts/${resortID}/comments`);
  const data = await response.json();
  return data;
};

const addComment = (CommentObject) => {
  return fetch(`${BASE_URL}/new`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(CommentObject)
  });
};
const editComment = (CommentObject) => {
  return fetch(`${BASE_URL}/${CommentObject.id}/edit`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(CommentObject)
  });
};

const deleteComment =(CommentID)=>{
  return fetch(`${BASE_URL}/${CommentID}/delete`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST"
  }); 
}

const likeComment =(CommentID)=>{
  return fetch(`${BASE_URL}/${CommentID}/like`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST"
  }); 
}
export {
  fetchCommentByID,
  fetchCommentsByResort,
  addComment,
  deleteComment,
  editComment,
  likeComment
};
