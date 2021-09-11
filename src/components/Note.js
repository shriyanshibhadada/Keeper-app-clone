import "./styles.css";

function Note(props) {
  function handleDelete(event) {
    props.deleteNote(props.id);
  }
  return (
    <div>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  );
}

export default Note;
