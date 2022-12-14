import { Typography, makeStyles } from "@material-ui/core";
import cssClasses from "./Package.module.css";
import PackagePlans from "./PackagePlans";

const useStyle = makeStyles({
  heading: {
    width: 383.41,
    height: 50,
    marginBottom: 20,
  },
  text: {
    width: 555,
    height: 60,
  },
});

export default function Package() {
  const classes = useStyle();

  return (
    <section className={cssClasses.package}>
      <div className={cssClasses.container}>
        <Typography variant="h2" className={classes.heading}>
          Choose Your Plan
        </Typography>
        <Typography
          className={classes.text}
          align="center"
          variant="subtitle1"
          color="textSecondary"
        >
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </Typography>
        <PackagePlans />
      </div>
    </section>
  );
}
