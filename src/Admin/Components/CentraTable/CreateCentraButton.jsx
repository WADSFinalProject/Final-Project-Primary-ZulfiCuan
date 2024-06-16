import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import './CreateAccountButton.scss';

const CreateCentraButton = ({ onClick }) => {
  return (
    <Button
      variant="outlined"
      className="createCentraButton"
      onClick={onClick}
      startIcon={<AddOutlinedIcon />}
    >
      Add Account
    </Button>
  );
};

export default CreateCentraButton;
