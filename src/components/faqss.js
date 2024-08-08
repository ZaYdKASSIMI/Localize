import * as React from 'react';

import '../index.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      id="faq"
      sx={{
        
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
        
        
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
          position: 'relative',
          
          
        }}
        className='typo'
      >
        FAQs
      </Typography>

      <p>find answers to common questions and get the information you need quickly.</p>


      <Box sx={{ width: '80%' }} >
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
            
          >
            <Typography component="h3" variant="subtitle2" >
              how does it work ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Website localization involves adapting a website's content, design, and functionality to make it culturally and linguistically appropriate for a specific target audience in different regions or countries. This typically includes translating text, adjusting images, formats, and ensuring compliance with local regulations and preferences.

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="subtitle2">
            De quelles pièces justificatives avez-vous besoin ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Pour commencer nos poursuites, une simple liste 
                        de vos débiteurs nous suffit. Par la suite, si nous le 
                        jugeons nécessaire ou sur réclamation de votre 
                        débiteur, nous vous demanderons les photocopies 
                        des pièces justificatives (contrat, facture, bon de 
                        commande, bon de livraison…).
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
            Je n’ai pas l’adresse de mon débiteur, que faire ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Nous sommes en mesure de faire des 
                        investigations approfondies pour retrouver vos 
                        débiteurs même si vous n’avez plus leurs 
                        coordonnées.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="subtitle2">
            Peut-on vous transmettre une liste de débiteurs par email ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
               Une fois le délai de traitement épuisé ou si l’on 
                                estime que le dossier est irrécouvrable nous vous 
                                remettons toutes les informations que l’on aura pu 
                                obtenir lors de notre processus de traitement, et 
                                cela sans aucune contrepartie.
            </Typography>
          </AccordionDetails>
        </Accordion>


        <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5d-content"
            id="panel5d-header"
          >
            <Typography component="h3" variant="subtitle2">
            Comment calculez-vous vos honoraires ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
               Nous facturons nos honoraires uniquement sur les 
                        sommes récupérées après notre intervention, au 
                        taux indiqué dans nos conditions de recouvrement. 
                        Nous vous assurons que vous n’avez aucun frais à 
                        engager en cas d’échec du recouvrement.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === 'panel6'}
          onChange={handleChange('panel6')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6d-content"
            id="panel6d-header"
          >
            <Typography component="h3" variant="subtitle2">
            Comment me tenez-vous informé de vos actions ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
               Vous serez informés des avancés de chaque 
                        dossier par e-mail et vous recevrez des reportings 
                        sur l’ensemble des dossiers confiés à la fin de 
                        chaque mois
            </Typography>
          </AccordionDetails>
        </Accordion>

      </Box>
    </Container>
  );
}
