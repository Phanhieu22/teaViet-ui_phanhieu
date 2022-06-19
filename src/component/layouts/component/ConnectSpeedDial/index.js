import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLink, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Button from '~/component/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    tooltip: {
        fontSize: '10em !important',
    },

    largeIcon: {
        width: 60,
        height: 60,
        '& svg': {
            fontSize: 24,
        },
    },
});
export default function ConnectSpeedDial() {
    const classes = useStyles();
    const actions = [
        {
            icon: (
                <Button iconSpeedDial target="_blank" href="https://www.messenger.com/t/hieuDeverloper">
                    <FontAwesomeIcon icon={faFacebookMessenger} size="3x" />
                </Button>
            ),
            name: 'Facebook',
        },
        {
            icon: (
                <Button iconSpeedDial target="_blank" href="https://zalo.me/0394337519">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </Button>
            ),
            name: 'Email',
        },
        {
            icon: (
                <Button iconSpeedDial target="_blank" href="https://zalo.me/0394337519">
                    <FontAwesomeIcon icon={faPhone} size="2x" />
                </Button>
            ),
            name: 'call : 0394337519',
        },
        {
            icon: (
                <Button iconSpeedDial target="_blank" href="https://www.facebook.com/hieuDeverloper">
                    <FontAwesomeIcon icon={faLink} size="2x" />
                </Button>
            ),
            name: 'link',
        },
    ];
    return (
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, fontSize: '1.5rem !important' }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16, overflow: 'hidden', fontSize: '2.5rem !important' }}
                icon={<SpeedDialIcon className={classes.largeIcon} />}>
                {actions.map((action) => (
                    <SpeedDialAction
                        sx={{ width: '50px', height: '50px', fontSize: '2rem' }}
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        // TooltipClasses={classes.tooltip}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}
