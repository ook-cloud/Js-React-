export const TodoButton = (props) => {
  return (
    <button
      className="button"
      onclick={props.onClick}
      style={{
        backgroundColor:
          props.filterValue === props.text ? "#3c82f6" : "#f3f4f6",
        color: props.filterValue === props.text ? "White" : "Black",
      }}
    >
      {props.text}
    </button>
  );
};

{
  /* <button className = "add" disabled = {isEmpty || isToolong}>
    add
</button>


<button className = "deletebtn"
 onClick = {() => handleDelete(todos.id)}>
    delete
</button> */
}
