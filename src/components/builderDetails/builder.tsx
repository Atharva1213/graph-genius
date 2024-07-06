import React from 'react';
import { Container, List, ListItem, ListItemText } from '@mui/material';

import Headling from '../headling/headling';

type FormBuilderDetailProps = {
  items: string[];
  title: string;
};

const FormBuilderDetail: React.FC<FormBuilderDetailProps> = ({ items, title }) => {
  const Formtitle = `How To Create ${title}  ?`;
  return (
    <Container sx={{ marginTop: '3rem', paddingBottom: '3rem' }}>
      <Headling title={Formtitle} size="h5" />
      <List sx={{ width: '100%' }}>
        {items.map((item, index) => (
          <ListItem key={index} sx={{ listStyleType: 'square' }}>
            <ListItemText primary={`• ${item}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default FormBuilderDetail;
