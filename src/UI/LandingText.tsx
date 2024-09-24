import Typography from "@mui/material/Typography";

const LandingText = () => {
  return (
    <div id="landing" className="panel">
      <Typography variant="h5">
        3D graphics technology powering the art world
      </Typography>
      <Typography variant="h6" sx={{ mt: 5 }}>
        Contact info@artxr.com to find out more
      </Typography>
    </div>
  );
};

export default LandingText;
