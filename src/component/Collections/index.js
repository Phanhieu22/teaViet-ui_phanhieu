import { Grid } from '@mui/material';
import classnames from 'classnames/bind';
import styles from './Collections.module.scss';
import CollectionItem from './CollectionsItem';
const cx = classnames.bind(styles);

function Collections({ items }) {
    return (
        <Grid container columns={16}>
            {items.map((item) => (
                <CollectionItem key={item.id} data={item} />
            ))}
        </Grid>
    );
}

export default Collections;
