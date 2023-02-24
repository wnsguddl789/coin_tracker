import { Container, Title } from '../components/styles/CoinDetail.style'
import { CoinDetailViewModel } from '../viewModels'
import ApexChart from 'react-apexcharts'

interface Props {
	viewModel: CoinDetailViewModel
}

export const CoinDetailView = ({ viewModel }: Props) => (
	<Container>
		<Title>{viewModel.coin?.name}</Title>
		<ApexChart
			type="line"
			series={[
				{
					name: 'Price',
					data: viewModel.coinHistory?.map((price) => price.close),
				},
			]}
			options={{
				theme: {
					mode: 'dark',
				},
				chart: {
					height: 300,
					width: 500,
					toolbar: {
						show: false,
					},
					background: 'transparent',
				},
				grid: { show: false },
				stroke: {
					curve: 'smooth',
					width: 4,
				},
				yaxis: {
					show: false,
				},
				fill: {
					type: 'gradient',
					gradient: { gradientToColors: ['#0be881'], stops: [0, 100] },
				},
				colors: ['#0fbcf9'],
				tooltip: {
					y: {
						formatter: (value: number) => `$${value.toFixed(2)}`,
					},
				},
				xaxis: {
					axisBorder: { show: false },
					axisTicks: { show: false },
					labels: { show: false },
					type: 'datetime',
					categories: viewModel.coinHistory?.map((price) => price.time_close),
				},
			}}
		/>
	</Container>
)
