
import React, {useState, useEffect} from 'react'
import {getCities} from "../../services/CityService"
import { getWorkPlaces } from '../../services/WorkPlacesService';
import { getWorkTimes } from '../../services/WorkTimeService';
import { Label, Dropdown, Segment, Checkbox, Button } from 'semantic-ui-react'

export default function JobPostingFilters({ clickEvent}) {
    const [cities, setCities] = useState([]);
    const [workPlaces, setWorkPlaces] = useState([]);
    const [workTimes, setWorkTimes] = useState([]);

    useEffect(() => {


    
       getCities().then(result => setCities(result.data.data))

        getWorkPlaces().then(result => setWorkPlaces(result.data.data))

        getWorkTimes().then(result => setWorkTimes(result.data.data))
    }, [])

    var cityOptions = cities.map(function(city) {
        return {  key: city.city_id, text: city.cityName, value: city.city_id };
    })

    const [cityIndex, setCityIndex] = useState([])
    const handleChangeCities = (e, { value }) => {
        setCityIndex(value)
    }

    const [workTimesIndex] = useState([])
    const handleChangeWorkTimes = (e, {value, checked}) =>{
        if(checked){
            workTimesIndex.push(value)

        }else{
            let index = workTimesIndex.indexOf(value)
            if(index > -1){
                workTimesIndex.splice(index, 1)
            }
        }
    }

    const [workPlaceIndex] = useState([])
    const handleChangeWorkPlaces = (e, {value, checked}) =>{
        if(checked){
            workPlaceIndex.push(value)

        }else{
            let index = workPlaceIndex.indexOf(value)
            if(index > -1){
                workPlaceIndex.splice(index, 1)
            }
        }
    } 

    
    return (
        <div>
            <Segment color="blue" raised>
                <Label size="large">Cities</Label>
                <Dropdown
                placeholder="Şehirler"
                selection
                search
                multiple
                clearable
                options={cityOptions}
                onChange={handleChangeCities}
                value={cityIndex} />
            </Segment>
            <Segment color="blue" raised>
                <Label attached="top" size="large">Work Place</Label>{
                    workPlaces.map(workPlace => (
                        <Checkbox 
                        key={workPlace.workPlaceId}
                        label={workPlace.workPlaceName}
                        onChange={handleChangeWorkPlaces}
                        value={workPlace.workPlaceId}
                        />
                    ))
                }
            </Segment>
            <Segment color="blue" raised>
                <Label attached="top" size="large">Work Time</Label>{
                    workTimes.map(workTime => (
                        <Checkbox
                        key={workTime.workTimeId}
                        label={workTime.workTimeName}
                        onChange={handleChangeWorkTimes}
                        value={workTime.workTimeId}/>
                    ))
                }
            </Segment>
            <Button
                type="button"
                color="green"
                onClick={() => clickEvent({ cityId: cityIndex,  workPlaceId: workPlaceIndex, workTimeId: workTimesIndex})}
            >
                Filters
            </Button>
                
            </div>
        )
    
}
