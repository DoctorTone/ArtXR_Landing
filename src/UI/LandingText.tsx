import Typography from "@mui/material/Typography";

const LandingText = () => {
  return (
    <div id="landing" className="panel">
      <Typography variant="h5" sx={{ mb: 5 }}>
        3D graphics technology powering the art world
      </Typography>
      <Typography variant="h6">
        If you want to experience a stunning virtual art gallery or museum
        experience then contact us at{" "}
        <a href="mailto:info@artxr.com">info@artxr.com</a> to find out how we
        can help.
      </Typography>
    </div>
  );
};

export default LandingText;
