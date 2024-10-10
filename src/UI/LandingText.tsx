import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const LandingText = () => {
  return (
    <div id="landing" className="panel">
      <Container>
        <Typography variant="h5" sx={{ mx: 0, mb: 3 }}>
          3D graphics technology powering the art world
        </Typography>
        <Typography variant="h6">
          If you want to create a stunning virtual art gallery or museum
          experience please contact us at:{" "}
          <a href="mailto:enquiries@drt-software.com">
            enquiries@drt-software.com
          </a>
        </Typography>
      </Container>
    </div>
  );
};

export default LandingText;
