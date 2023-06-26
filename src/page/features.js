import Figure from 'react-bootstrap/Figure';

function FigureExample() {
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://media.istockphoto.com/id/1058117688/fr/photo/verre-de-bi%C3%A8re-fra%C3%AEche-et-froide-sur-fond-fonc%C3%A9.jpg?s=612x612&w=0&k=20&c=3-6hw583u2506GGt4JqQ0phqUzPuwXySivyKu6ZTPJw="
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
  );
}

export default FigureExample;