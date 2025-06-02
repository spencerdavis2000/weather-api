import axios from 'axios';
import { getGeoLocationsByCity } from '../../services/weatherData'

jest.mock('../../envs/apiKey', () => ({
  apiKey: {
    weatherApiKey: 'test-api-key',
  },
}));

afterEach(() => jest.resetAllMocks())

describe('getGeoLocationsByCity', () => {
  let mockGet: jest.Mock;

  beforeEach(() => {
    mockGet = jest.fn();
    (axios.get as jest.Mock) = mockGet;
  });

  afterEach(() => mockGet.mockClear());

  it('should return geolocation data for a valid city', async () => {
    const mockData = [{ name: 'Chicago', lat: 41.88, lon: -87.62 }];
    mockGet.mockResolvedValueOnce({ data: mockData });

    const result = await getGeoLocationsByCity('chicago');
    expect(result).toEqual(mockData);

    expect(mockGet).toHaveBeenCalledWith(
      'https://api.openweathermap.org/geo/1.0/direct',
      expect.objectContaining({
        params: expect.objectContaining({ 
          q: 'chicago',
          limit: 5,
          appid: 'test-api-key',
        }),
      }),
    );
  });

  it('should throw an error if the API call fails', async () => {
    mockGet.mockRejectedValueOnce(new Error('API failure'));
    await expect(getGeoLocationsByCity('badcity')).rejects.toThrow('API failure');
  })
});