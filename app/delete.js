const HandleDelete = (index) => {
    // Create a new array without the deleted item
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);

return (
	<div>
	  {data.map((item) => (
	    <div key={item.id}>
	        <img src="like.svg" alt="Like" onClick={() => handleDleteclick(item.id)} height="45" width="45" />
	      <div className="dot">{item.likes}</div>
	        <img className="delete_img" src="fluent_delete-32-regular.svg" onClick={() => handleDlete(item.id)} alt="Delete" height="45" width="45" />
	      <span>{item.dislikes}</span>
	      <p>{item.text}</p>
	      <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
	    </div>
	  ))}
	</div>
  );
};

export default HandleDelete;
