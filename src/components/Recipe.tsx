const Recipe = ({ recipe, id, image, title, publisher, style }: any) => {
  return (
    <div className={style.recipe}>
      <img src={image} alt="" />
      <div className={style.title}>
        <h2>{title}</h2>
        <h4>{publisher}</h4>
      </div>
    </div>
  );
};

export default Recipe;
