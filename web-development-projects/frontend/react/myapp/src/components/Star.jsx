import React  from "react";
import StarIcon from '@mui/icons-material/Star';

export default function Star({ selected, onSelect, id}) {
    return <StarIcon style={{ color: selected ? "red" : "black"}} onClick={() => onSelect(id)}/>;
}