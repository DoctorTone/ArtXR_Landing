import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const LandingText = () => {
  return (
    <div id="landing" className="panel">
      <Container>
        <Typography variant="h5" sx={{ mx: 0, mb: 3 }}>
          Art[XR] - A digital arts studio
        </Typography>
        <Typography variant="h6">
          Contact us for bespoke creations:{" "}
          <a href="mailto:enquiries@drt-software.com">enquiries@artxr.com</a>
        </Typography>
      </Container>
    </div>
  );
};

export default LandingText;
