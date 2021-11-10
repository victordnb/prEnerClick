import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import SimpleLineChart from "./SimpleLineChart";
import Months from "./common/Months";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Loading from "./common/Loading";
import Bar from "./cards/Bar";
import ChartItem from "./cards/ChartItem";
import Topbar from "./Topbar";

const numeral = require("numeral");
numeral.defaultFormat("0,000");

const backgroundShape = require("../images/shape.svg");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    paddingBottom: 200
  },
  grid: {
    width: 1200,
    margin: `0 ${theme.spacing(2)}px`,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    }
  },
  loadingState: {
    opacity: 0.05
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  rangeLabel: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2)
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  actionButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 152,
    height: 36
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  block: {
    padding: theme.spacing(2)
  },
  loanAvatar: {
    display: "inline-block",
    verticalAlign: "center",
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main
  },
  interestAvatar: {
    display: "inline-block",
    verticalAlign: "center",
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light
  },
  inlining: {
    display: "inline-block",
    marginRight: 10
  },
  buttonBar: {
    display: "flex"
  },
  noBorder: {
    borderBottomStyle: "hidden"
  },
  mainBadge: {
    textAlign: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  }
});

const monthRange = Months;

class Charts extends Component {
  state = {
    loading: true,
    amount: 15000,
    period: 3,
    start: 0,
    monthlyInterest: 0,
    totalInterest: 0,
    monthlyPayment: 0,
    totalPayment: 0,
    data: [],

     bar_series1: [
        {
          name: 'Actual',
          data: [
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

      bar_options1: {
        chart: {
          height: 150,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        colors: ['#00E396'],
        dataLabels: {
            enabled: true,
            textAnchor: 'start',
            formatter: function(val, opt) {
                return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
            },
            offsetX: 0,
          },

        // dataLabels: {
        //   formatter: function(val, opt) {
        //     const goals =
        //       opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
        //         .goals
        
        //     if (goals && goals.length) {
        //       return `${val} / ${goals[0].value}`
        //     }
        //     return val
        //   }
        // },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ['Actual', 'Expected'],
          markers: {
            fillColors: ['#00E396', '#775DD0']
          }
        }
      },


      bar_series2: [
        {
          name: 'Actual',
          data: [
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

      bar_options2: {
        chart: {
          height: 150,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        colors: ['#775DD0'],
        dataLabels: {
            enabled: true,
            textAnchor: 'start',
            formatter: function(val, opt) {
                return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
            },
            offsetX: 0,
          },

        // dataLabels: {
        //   formatter: function(val, opt) {
        //     const goals =
        //       opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
        //         .goals
        
        //     if (goals && goals.length) {
        //       return `${val} / ${goals[0].value}`
        //     }
        //     return val
        //   }
        // },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ['Actual', 'Expected'],
          markers: {
            fillColors: ['#775DD0', '#00E396']
          }
        }
      },


      bar_series3: [
        {
          name: 'Actual',
          data: [
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

      bar_options3: {
        chart: {
          height: 150,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        colors: ['#775DD0'],
        dataLabels: {
            enabled: true,
            textAnchor: 'start',
            formatter: function(val, opt) {
                return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
            },
            offsetX: 0,
          },

        // dataLabels: {
        //   formatter: function(val, opt) {
        //     const goals =
        //       opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
        //         .goals
        
        //     if (goals && goals.length) {
        //       return `${val} / ${goals[0].value}`
        //     }
        //     return val
        //   }
        // },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ['Actual', 'Expected'],
          markers: {
            fillColors: ['#00E396', '#775DD0']
          }
        }
      },


      bar_series4: [
        {
          name: 'Actual',
          data: [
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
           
          ]
        }
      ],

      bar_options4: {
        chart: {
          height: 150,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        colors: ['#00E396'],
        dataLabels: {
            enabled: true,
            textAnchor: 'start',
            formatter: function(val, opt) {
                return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
            },
            offsetX: 0,
          },

        // dataLabels: {
        //   formatter: function(val, opt) {
        //     const goals =
        //       opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
        //         .goals
        
        //     if (goals && goals.length) {
        //       return `${val} / ${goals[0].value}`
        //     }
        //     return val
        //   }
        // },
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

  updateValues() {
    const { amount, period, start } = this.state;
    const monthlyInterest =
      (amount * Math.pow(0.01 * 1.01, period)) / Math.pow(0.01, period - 1);
    const totalInterest = monthlyInterest * (period + start);
    const totalPayment = amount + totalInterest;
    const monthlyPayment =
      period > start ? totalPayment / (period - start) : totalPayment / period;

    const data = Array.from({ length: period + start }, (value, i) => {
      const delayed = i < start;
      return {
        name: monthRange[i],
        Type: delayed ? 0 : Math.ceil(monthlyPayment).toFixed(0),
        OtherType: Math.ceil(monthlyInterest).toFixed(0)
      };
    });

    this.setState({
      monthlyInterest,
      totalInterest,
      totalPayment,
      monthlyPayment,
      data
    });
  }

  componentDidMount() {
    this.updateValues();
  }

  handleChangeAmount = (event, value) => {
    this.setState({ amount: value, loading: false });
    this.updateValues();
  };

  handleChangePeriod = (event, value) => {
    this.setState({ period: value, loading: false });
    this.updateValues();
  };

  handleChangeStart = (event, value) => {
    this.setState({ start: value, loading: false });
    this.updateValues();
  };

  render() {
    const { classes } = this.props;
    const {
      amount,
      period,
      start,
      monthlyPayment,
      monthlyInterest,
      data,
      loading
    } = this.state;
    const currentPath = this.props.location.pathname;

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={10}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Grid item xs={12}>
                
                  <div >
                    <Typography variant="h6" gutterBottom>
                    ÚLTIMA HORA
                    </Typography>
                    
                    
                </div>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>
                  <div>
                      <Typography color="secondary" variant="h6" gutterBottom>
                      21.10.2021
                      </Typography>
                   </div>
                   <Typography color="secondary" variant="subtitle1" gutterBottom>
                        Nuevo informe: Índice Red Eléctrica
                    </Typography>
                   <Typography variant="subtitle2">Se trata de un indicador cuyo objetivo es facilitar una información adelantada de la evolución del consumo eléctrico del conjunto de empresas que tienen un consumo eléctrico medio/alto, así como su desglose por sectores de actividad (actividades industriales y de servicios).</Typography>
                   
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>
                  <div>
                      <Typography color="secondary" variant="h6" gutterBottom>
                      15.10.2021
                      </Typography>
                      
                      <Typography color="secondary" variant="subtitle1" gutterBottom>
                        Nuevo boletín mensual: Septiembre 2021
                    </Typography>
                        <Typography color="secondary" variant="subtitle2" gutterBottom>
                        Ya está publicado el Boletín mensual Septiembre 2021, junto a las tablas excel de cada capítulo. 
                      </Typography>
                      <Typography variant="subtitle2">También están disponibles las series estadísticas mensuales.</Typography>
                   </div>
            
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>
                  <div>
                      <Typography color="secondary" variant="h6" gutterBottom>
                      GENERACIÓN RENOVABLE
                      </Typography>
                   </div>
                    <div>
                        <Bar options={this.state.bar_options1} series = {this.state.bar_series1}/>
                    </div>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>
                  <div>
                      <Typography color="secondary" variant="h6" gutterBottom>
                      GENERACIÓN  LIBRE DE EMISIONES
                      </Typography>
                   </div>
                   <div>
                   <Bar options={this.state.bar_options2} series = {this.state.bar_series2}/>
                    </div>
                </Paper>
              </Grid>


              <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>
                  <div>
                      <Typography color="secondary" variant="h6" style={{ textTransform: "uppercase" }} gutterBottom>
                      POTENCIA INSTALADA RENOVABLE
                      </Typography>
                   </div>
                    <div>
                    <Bar options={this.state.bar_options3} series = {this.state.bar_series3}/>
                    </div>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>
                  <div>
                      <Typography color="secondary" variant="h6" gutterBottom>
                      POTENCIA INSTALADA LIBRE DE EMISIONES
                      </Typography>
                   </div>
                   <div>
                   <Bar options={this.state.bar_options4} series = {this.state.bar_series4}/>
                    </div>
                </Paper>
              </Grid>

              <Grid container spacing={4} justify="center">
                <Grid item xs={12} md={8}>
                  <Paper
                    className={classes.paper}
                    style={{ position: "relative" }}
                  >
                    <div>
                      <Typography color="secondary" variant="h6" gutterBottom>
                        DEMANDA DE ENERGÍA EN TIEMPO REAL - PENINSULAR
                      </Typography>
                   </div>
                   <div>
                       <ChartItem />
                   </div>
     
     
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper
                    className={classes.paper}
                    style={{ position: "relative" }}
                  >
                 <div>
                      <Typography color="secondary" variant="h6" gutterBottom>
                      EVOLUCIÓN DE LA DEMANDA
                      </Typography>
                   </div>
                   <div>
                        <Grid item xs={6}>
                            <Typography
                            style={{ textTransform: "uppercase" }}
                            color="secondary"
                            gutterBottom
                            >
                            PENINSULAR
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                            100MWh
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                            style={{ textTransform: "uppercase" }}
                            color="secondary"
                            gutterBottom
                            >
                            BALEARES
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                            0 MWh
                            </Typography>
                            <Typography
                            style={{ textTransform: "uppercase" }}
                            color="secondary"
                            gutterBottom
                            >
                            CEUTA
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                            100 MWh
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography
                            style={{ textTransform: "uppercase" }}
                            color="secondary"
                            gutterBottom
                            >
                            CANARIAS
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                            100 MWh
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                            style={{ textTransform: "uppercase" }}
                            color="secondary"
                            gutterBottom
                            >
                            MELILLA
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                            100 MWh
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                            style={{ textTransform: "uppercase" }}
                            color="secondary"
                            gutterBottom
                            >
                            MELILLA
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                            100 MWh
                            </Typography>
                        </Grid>
                   </div>
                  </Paper>
                </Grid>

              </Grid>

              <Grid container spacing={4} justify="center">
                <Grid item xs={12} md={6}>
                  <Paper
                    className={classes.paper}
                    style={{ position: "relative" }}
                  >
                    
                    <div>
                      <Typography color="secondary" variant="h6" gutterBottom>
                      SALDOS POR FRONTERAS - PROGRAMADO
                      </Typography>
                   </div>
                   <div>
                   <Typography
                                style={{ textTransform: "uppercase" }}
                                color="secondary"
                                gutterBottom
                              >



                   </Typography>
                   </div>
     
     
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper
                    className={classes.paper}
                    style={{ position: "relative" }}
                  >
                 <div>
                      <Typography color="secondary" variant="h6" gutterBottom>
                      EVOLUCIÓN DEL PVPC FRENTE AL PRECIO DEL MERCADO DIARIO
                      </Typography>
                   </div>
                         
                  </Paper>
                </Grid>

              </Grid>

            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Charts));
