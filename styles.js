export default Style = {
	container: {
		flex: 1,
		flexDirection: 'row',
		padding: 20,
		backgroundColor: '#222222',
	},
	AccelBarContainer: {
		backgroundColor: '#888888',
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    borderRadius: 10,
    shadowColor: 'black',
		shadowOpacity: 0.3,
		shadowOffset: {width:0, height:5},
		shadowRadius: 10
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
	settingsRow: {
		height: 96, 
		flexDirection: 'column', 
		alignItems:'center',
		borderBottomWidth: 1,
		borderBottomColor: '#444',
		marginBottom: 10
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
	smallText: {
		color: 'white',
		fontSize: 20,				
	},
	mediumText: {
		color: 'white',
		fontSize: 30,				
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
		fontSize: 20,
	},
	bigButton: {
		marginTop: 10,
		marginBottom: 30,
		backgroundColor: '#222222',
		shadowColor: 'black',
		shadowOpacity: 0.3,
		shadowOffset: {width:0, height:5},
		shadowRadius: 10
	},
	slider: {
		flex:1,
	},
	debug: {
		opacity: 0.0,
		position:'absolute',
		top: 30,
		left:30
	}
}

