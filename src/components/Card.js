import CardItem from "./CardItem";

const Card = (props) => {
  return (
    <>
      <CardItem
        image={props.info[0].image}
        title={props.info[0].title}
        desc={props.info[0].description}
      />
      <CardItem
        image={props.info[1].image}
        title={props.info[1].title}
        desc={props.info[1].description}
      />
      <CardItem
        image={props.info[2].image}
        title={props.info[2].title}
        desc={props.info[2].description}
      />
    </>
  );
};

export default Card;
