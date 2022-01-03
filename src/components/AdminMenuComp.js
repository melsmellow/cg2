import React,{useContext} from 'react';
import {Row , Col,Table} from 'react-bootstrap';
import AppContext from '../AppContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';

// Form
import AddNewResidentForm from './admin/form/AddNewResidentForm';
import DischargedResidentForm from './admin/form/DischargedResidentForm';
import IncidentReportForm from './admin/form/IncidentReportForm';
import IncidentInvestigationForm from './admin/form/IncidentInvestigationForm';
import ResidentSearchForm from './admin/form/ResidentSearchForm';

// Popup Components
import AddNewResidentPopup from './admin/AddNewResidentPopup';
import DischargedResidentPopup from './admin/DischargedResidentPopup';
import ResidentProviderPopup from './admin/ResidentProviderPopup';
import IncidentReportsPopup from './admin/IncidentReportsPopup';
import  IncidentInvestigationPopup from './admin/IncidentInvestigationPopup';
import  AdditionalResidentFieldsPopup from './admin/AdditionalResidentFieldsPopup';
import  ResidentKeyIndicatorsPopup from './admin/ResidentKeyIndicatorsPopup';
import  ResidentSearchPopup from './admin/ResidentSearchPopup';
import  DischargedManagementPopup from './admin/DischargedManagementPopup';
import  MedChartManagementPopup from './admin/MedChartManagementPopup';

function AdminMenuComp() {

	const { sideBarShowing, setSidebarShowing} = useContext(AppContext);
	return (
		<div>
			<Row className="d-flex justify-content-center">
				{sideBarShowing ?
				<Col id="hidden-div" lg="2"></Col> :
				null}
				<Col md="10" sm="11">
				  	<Row>
						<div md="10" sm="11"className=" mt-5 pb-5 mx-auto" id="dashContainer">
							<Col md="10">
								<h1>Admin Menu</h1>
							</Col>
							<Col md="12" className="mx-auto d-flex justify-item-center" >
								<Col md="3" sm="10" className="mx-auto adminItem">
									<AddNewResidentPopup>
										<AddNewResidentForm/>
									</AddNewResidentPopup>
								</Col>
								<Col md="3" sm="10" className="mx-auto adminItem">
									<DischargedResidentPopup>
										<DischargedResidentForm/>
									</DischargedResidentPopup>
								</Col>
								<Col md="3" sm="10" className="mx-auto adminItem">
									<ResidentProviderPopup>
										resident provider
									</ResidentProviderPopup>
								</Col>
						</Col>
						<Col md="12" className="mx-auto d-flex justify-item-center mt-4" >
								<Col md="3" sm="10" className="mx-auto adminItem">
									<IncidentReportsPopup>
										<IncidentReportForm/>
									</IncidentReportsPopup>
								</Col>
								<Col md="3" sm="10" className="mx-auto adminItem">
									<IncidentInvestigationPopup>
										<IncidentInvestigationForm/>
									</IncidentInvestigationPopup>
								</Col>
								<Col md="3" sm="10" className="mx-auto adminItem">
									<AdditionalResidentFieldsPopup>
										hey
									</AdditionalResidentFieldsPopup>
								</Col>
						</Col>
						<Col md="12" className="mx-auto d-flex justify-item-center mt-4" >
								<Col md="3" sm="10" className="mx-auto adminItem">
									<ResidentKeyIndicatorsPopup>
										incident
									</ResidentKeyIndicatorsPopup>
								</Col>
								<Col md="3" sm="10" className="mx-auto adminItem">
									<ResidentSearchPopup>
										<ResidentSearchForm/>
									</ResidentSearchPopup>
								</Col>
								<Col md="3" sm="10" className="mx-auto adminItem">
									<DischargedManagementPopup>
										hey
									</DischargedManagementPopup>
								</Col>
						</Col>
						<Col md="12" className="mx-auto d-flex justify-item-center mt-4" >
								<Col md="3" sm="10" className="mx-auto adminItem">
									<MedChartManagementPopup>
										hey
									</MedChartManagementPopup>
								</Col>
						</Col>
						</div>
					</Row>
				</Col>
			</Row>
		</div>
	)
}

export default AdminMenuComp