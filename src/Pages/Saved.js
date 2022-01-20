import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
const Saved = ({ saved }) => {
  return (
    <Container>
      <h1>Saved Clothes</h1>
      <div className="homeMain">
        {saved &&
          saved.map((it) => {
            return (
              <div className="home__card">
                <img src={it.image} alt="image" className="image" width="100" />
                <h2 className="h3">{it.name} </h2>
                <Link
                  to={`/clothes/${it.id}`}
                  state={it}
                  className="details btn btn-primary"
                >
                  {" "}
                  More{" "}
                </Link>
              </div>
            );
          })}
      </div>
    </Container>
  );
};

// class Save extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <>
//         <h1 className="details_header">Saved </h1>
//         {this.props.data &&
//           this.props.data.map((it) => {
//             return (
//               <div className="CloDiv">
//                 <img src={it.image} className="image"></img>
//                 <h2 className="h3">{it.title} </h2>
//                 <Link
//                   to={`/details/${it.title}`}
//                   state={it}
//                   className="details"
//                 >
//                   {" "}
//                   More Details{" "}
//                 </Link>
//               </div>
//             );
//           })}
//       </>
//     );
//   }
// }

export default Saved;
