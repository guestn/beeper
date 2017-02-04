export default Style = {
	container: {
		flex: 1,
		borderWidth: 1,
		borderColor: 'black',
		borderStyle: 'solid',
		flexDirection: 'row',
		padding: 20,
		backgroundColor: '#222222',
		
	},
	AccelBarContainer: {
		backgroundColor: '#888888',
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    borderRadius: 10
	},
	AccelBar: {
		backgroundColor: '#36DBA8',
		height:200,
		borderBottomLeftRadius: 6,
		borderBottomRightRadius: 6,
		shadowColor: 'white',
		shadowOpacity: 0.5,
		shadowRadius: 5
	},
	bigFigureContainer: {
		alignItems: 'center'
	},
	bigFigure: {
		color: 'white',
		fontSize: 80,
	},
	mediumFigure: {
		color: 'white',
		fontSize: 50,		
	},
	button: {
		padding: 10,
		borderWidth: 2,
		borderColor: '#666',
		borderStyle: 'solid',
		borderRadius: 6,
	},
	bigButtonText: {
		color: '#36DBA8',
		fontSize: 24,
	},
	bigButton: {
		marginTop: 10,
		marginBottom: 10
	},
	debug: {
		position:'absolute',
		top: 30,
		left:30
	}
}

