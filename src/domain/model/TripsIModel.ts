interface Airport {
  cityCode: string;
  cityName: string;
  terminal: string;
  airportCode: string;
  airportName: string;
  countryCode: string;
  countryName: string;
}

interface Airline {
  airlineCode: string;
  airlineName: string;
  flightNumber: string;
}

interface DisplayData {
  source: {
    airport: Airport;
    depTime: string;
  };
  airlines: Airline[];
  stopInfo: string;
  destination: {
    airport: Airport;
    arrTime: string;
  };
  totalDuration: string;
}

export interface FlightData {
  id: string;
  fare: number;
  displayData: DisplayData;
}

export interface ApiResponse {
  data: {
    result: FlightData[];
  };
  message: string;
}
