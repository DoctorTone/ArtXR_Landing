import Typography from "@mui/material/Typography";

const LandingText = () => {
  return (
    <div id="landing" className="panel">
      <Typography variant="h5" sx={{ mb: 5 }}>
        3D graphics technology powering the art world
      </Typography>
      <Typography variant="h6">
        If you want to create a stunning virtual art gallery or museum
        experience please contact us at:{" "}
        <a href="mailto:enquiries@drt-software.com">
          enquiries@drt-software.com
        </a>
        .
      </Typography>
    </div>
  );
};

export default LandingText;
