import {makeStyles} from "@material-ui/core/styles"
import HeroIMG  from "../assets/heroimg.jpg"



export default makeStyles({
  HeroImage: {
    position: "relative",
    backgroundImage: `url(${HeroIMG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 300,
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },

  aboutSection: {
    position: "relative",
    backgroundColor: "#F7E3B6",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 300,
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },

  stylesection: {
    // backgroundColor: "#CDC2D6",
    backgroundColor: "white",

    height: 15,
  },



  profileSection: {
    position: "relative",
    backgroundColor: "#A1B78F",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 300,
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },

});