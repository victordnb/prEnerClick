import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description';
import ButtonBar from '../buttons/ButtonBar';
import Chart from "react-apexcharts";

const styles = theme => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  avatar: {
    margin: 10,
    backgroundColor: theme.palette.grey['200'],
    color: theme.palette.text.primary,
  },
  avatarContainer: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginBottom: theme.spacing(4)
    }
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  baseline: {
    alignSelf: 'baseline',
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: 0
    }
  },
  inline: {
    display: 'inline-block',
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  inlineRight: {
    width: '30%',
    textAlign: 'right',
    marginLeft: 50,
    alignSelf: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: 0,
      textAlign: 'center'
    }
  },
  backButton: {
    marginRight: theme.spacing(2)
  }
})

class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: '2011',
              y: 12,
              goals: [
                {
                  name: 'Expected',
                  value: 14,
                  strokeWidth: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2012',
              y: 44,
              goals: [
                {
                  name: 'Expected',
                  value: 54,
                  strokeWidth: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2013',
              y: 54,
              goals: [
                {
                  name: 'Expected',
                  value: 52,
                  strokeWidth: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2014',
              y: 66,
              goals: [
                {
                  name: 'Expected',
                  value: 65,
                  strokeWidth: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2015',
              y: 81,
              goals: [
                {
                  name: 'Expected',
                  value: 66,
                  strokeWidth: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2016',
              y: 67,
              goals: [
                {
                  name: 'Expected',
                  value: 70,
                  strokeWidth: 5,
                  strokeColor: '#775DD0'
                }
              ]
            }
          ]
        }
      ],
      
      options: {
        chart: {
          height: 350,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        colors: ['#00E396'],
        dataLabels: {
          formatter: function(val, opt) {
            const goals =
              opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                .goals
        
            if (goals && goals.length) {
              return `${val} / ${goals[0].value}`
            }
            return val
          }
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ['Actual', 'Expected'],
          markers: {
            fillColors: ['#00E396', '#775DD0']
          }
        }
      },
    
    
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.itemContainer}>
          <div id="chart">
            <Chart options={this.props.options} series={this.props.series} type="bar" height={350} />
          </div>
          </div>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Bar);
