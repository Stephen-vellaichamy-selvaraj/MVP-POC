import { useEffect, useState } from 'react';
import { useRange } from 'react-instantsearch';
//import { RangeSlider as SpectrumRangeSlider } from '@adobe/react-spectrum';


//import './RangeSlider.css';

export default function RangeSlider(props) {

    const { start, range, canRefine, refine } = useRange(props);
    const { min, max } = range;
    const [value, setValue] = useState({ start: min, end: max });
  
    const from = Math.max(min, Number.isFinite(start[0]) ? start[0] : min);
    const to = Math.min(max, Number.isFinite(start[1]) ? start[1] : max);
  
    useEffect(() => {
      setValue({ start: from, end: to });
    }, [from, to]);
  
    return (
        <>
            <input
                type="range"
                className="form-range"
                name="range"
                step={1}
                min={100}
                max={10000}
                defaultValue={10}
                onchange="rangePrimary.value=value"
            />
            <div className="range-inner">
                <label>$</label>
                <input type="text" id="rangePrimary" placeholder={100} />
            </div>
        </>                          
        // <input
        //     type="range"
        //     className="form-range"
        //     name="range"
        //     step={1}
        //     min={100}
        //     max={10000}
        //     defaultValue={10}
        //     onchange="rangePrimary.value=value"
        // />    
    );
}
