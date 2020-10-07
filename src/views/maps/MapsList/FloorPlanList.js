import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import AddFloorPlan from '../floorPlan/AddFloorPlan';
import ListFloorPlanCard from '../floorPlan/ListFloorPlanCard'

export const FloorPlanList = ({buildingId}) => {
  const [floorPlans, setFloorPlans] = React.useState(null);
    const loadFloorPlans = async () => {
        const url =
          'http://localhost/platform-code/map-api/floorplan_list/?building_id='+buildingId;
        const response = await fetch(url, {
          headers: { 'dev-token': localStorage.accessToken }
        });
        const data = await response.json();
        if(data.floor_plans.length>0){
        setFloorPlans(data.floor_plans);
        }
        else
        {
          setFloorPlans(null);
        }
      };

    useEffect(() => {
        if(floorPlans==null)
        loadFloorPlans();
      });
      if(floorPlans)
    return (
        <div>
               <Grid container spacing={3}>
                  {
                    floorPlans.map(floor => (
                      <Grid item md={12}>
                        <ListFloorPlanCard floor={floor} />
                      </Grid>
                    ))}
                </Grid>
        </div>
    )
    else
    return (
        <Card>
          <CardContent>
            <Box>
              <Typography
                align="center"
                color="textSecondary"
                variant="body1"
              >
                You don't have any floor plans yet!
              </Typography>
              <br />
              <Typography
                align="center"
                color="textPrimary"
                variant="h1"
              >
                <AddFloorPlan />
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )
}
