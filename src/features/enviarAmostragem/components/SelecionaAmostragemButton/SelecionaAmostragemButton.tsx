import styled from '@emotion/styled';
import { UploadFile as UploadFileIcon } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';

const Input = styled('input')({
  display: 'none',
});

type TSelecionaAmostragemButtonProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SelecionaAmostragemButton = ({
  onChange,
}: TSelecionaAmostragemButtonProps) => {
  const [filename, setFileName] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) setFileName(files[0].name);

    onChange(event);
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor="contained-button-file">
      <Input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        component="span"
        startIcon={<UploadFileIcon />}
        color="secondary"
      >
        Carregar Dados(.cvs)
      </Button>

      {filename && <span>{filename}</span>}
    </label>
  );
};

export default SelecionaAmostragemButton;
