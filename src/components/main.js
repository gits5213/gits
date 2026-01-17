import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../pages/landing';
import Courses from '../pages/courses';
import Docs from '../pages/docs';
import APIS from '../pages/apis';
import AID from '../pages/aid';
import Practice from '../pages/practice';
import ABTesting from '../pages/practice/ABTesting';
import AddRemoveElements from '../pages/practice/AddRemoveElements';
import BasicAuth from '../pages/practice/BasicAuth';
import BrokenImages from '../pages/practice/BrokenImages';
import ChallengingDOM from '../pages/practice/ChallengingDOM';
import Checkboxes from '../pages/practice/Checkboxes';
import ContextMenu from '../pages/practice/ContextMenu';
import DigestAuth from '../pages/practice/DigestAuth';
import DisappearingElements from '../pages/practice/DisappearingElements';
import DragAndDrop from '../pages/practice/DragAndDrop';
import Dropdown from '../pages/practice/Dropdown';
import DynamicContent from '../pages/practice/DynamicContent';
import DynamicControls from '../pages/practice/DynamicControls';
import DynamicLoading from '../pages/practice/DynamicLoading';
import EntryAd from '../pages/practice/EntryAd';
import ExitIntent from '../pages/practice/ExitIntent';
import FileDownload from '../pages/practice/FileDownload';
import FileUpload from '../pages/practice/FileUpload';
import FloatingMenu from '../pages/practice/FloatingMenu';
import ForgotPassword from '../pages/practice/ForgotPassword';
import FormAuthentication from '../pages/practice/FormAuthentication';
import Frames from '../pages/practice/Frames';
import Geolocation from '../pages/practice/Geolocation';
import HorizontalSlider from '../pages/practice/HorizontalSlider';
import Hovers from '../pages/practice/Hovers';
import InfiniteScroll from '../pages/practice/InfiniteScroll';
import Inputs from '../pages/practice/Inputs';
import JQueryUIMenus from '../pages/practice/JQueryUIMenus';
import JavaScriptAlerts from '../pages/practice/JavaScriptAlerts';
import JavaScriptError from '../pages/practice/JavaScriptError';
import KeyPresses from '../pages/practice/KeyPresses';
import LargeDeepDOM from '../pages/practice/LargeDeepDOM';
import MultipleWindows from '../pages/practice/MultipleWindows';
import NestedFrames from '../pages/practice/NestedFrames';
import NotificationMessages from '../pages/practice/NotificationMessages';
import RedirectLink from '../pages/practice/RedirectLink';
import RegistrationForm from '../pages/practice/RegistrationForm';
import E2EFlow from '../pages/practice/E2EFlow';
import SecureFileDownload from '../pages/practice/SecureFileDownload';
import ShadowDOM from '../pages/practice/ShadowDOM';
import ShiftingContent from '../pages/practice/ShiftingContent';
import SlowResources from '../pages/practice/SlowResources';
import SortableDataTables from '../pages/practice/SortableDataTables';
import StatusCodes from '../pages/practice/StatusCodes';
import Typos from '../pages/practice/Typos';
import WYSIWYGEditor from '../pages/practice/WYSIWYGEditor';
import About from '../pages/about';
import Contact from '../pages/contact';
import HowItWorks from '../pages/howItWorks';
import TermsOfUse from '../pages/termsOfUse';
import PrivacyPolicy from '../pages/privacyPolicy';
import CopyrightNotice from '../pages/copyrightNotice';
import WebsiteDisclaimer from '../pages/websiteDisclaimer';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/courses' component={Courses} />
        <Route path='/courses/code4kids' component={Courses} />
        <Route path='/courses/webdevelopment' component={Courses} />
        <Route path='/courses/automation' component={Courses} />
        <Route path='/courses/manual' component={Courses} />
        <Route path='/courses/accessibility' component={Courses} />
        <Route path='/courses/sdet-roadmap' component={Courses} />
        <Route exact path='/docs' component={Docs} />
        <Route path='/docs/agile' component={Docs} />
        <Route path='/docs/scrum' component={Docs} />
        <Route path='/docs/network' component={Docs} />
        <Route path='/docs/sql' component={Docs} />
        <Route path='/docs/manual' component={Docs} />
        <Route path='/docs/linux' component={Docs} />
        <Route path='/docs/git' component={Docs} />
        <Route path='/docs/html' component={Docs} />
        <Route path='/docs/css' component={Docs} />
        <Route path='/docs/java' component={Docs} />
        <Route path='/docs/python' component={Docs} />
        <Route path='/docs/javascript' component={Docs} />
        <Route path='/docs/reactjs' component={Docs} />
        <Route path='/docs/typescript' component={Docs} />
        <Route path='/docs/links' component={Docs} />
        <Route exact path='/apis' component={APIS} />
        <Route path='/apis/selenium' component={APIS} />
        <Route path='/apis/playwright' component={APIS} />
        <Route path='/apis/cypressio' component={APIS} />
        <Route path='/apis/protractor' component={APIS} />
        <Route path='/apis/restassured' component={APIS} />
        <Route path='/apis/readyapi' component={APIS} />
        <Route path='/apis/performance' component={APIS} />
        <Route path='/apis/architecture' component={APIS} />
        <Route path='/apis/appium' component={APIS} />
        <Route path='/apis/webdriverio' component={APIS} />
        <Route path='/apis/supertest' component={APIS} />
        <Route path='/apis/frisby' component={APIS} />
        <Route exact path='/aid' component={AID} />
        <Route path='/aid/window' component={AID} />
        <Route path='/aid/mac' component={AID} />
        <Route path='/aid/basic' component={AID} />
        <Route path='/aid/gk' component={AID} />
        <Route path='/aid/help' component={AID} />
        <Route path='/aid/frontend' component={AID} />
        <Route path='/aid/codesnippet' component={AID} />
        <Route exact path='/practice' component={Practice} />
        <Route path='/practice/examples' component={Practice} />
        <Route path='/practice/testcases' component={Practice} />
        <Route path='/practice/ab-testing' component={ABTesting} />
        <Route path='/practice/add-remove-elements' component={AddRemoveElements} />
        <Route path='/practice/basic-auth' component={BasicAuth} />
        <Route path='/practice/broken-images' component={BrokenImages} />
        <Route path='/practice/challenging-dom' component={ChallengingDOM} />
        <Route path='/practice/checkboxes' component={Checkboxes} />
        <Route path='/practice/context-menu' component={ContextMenu} />
        <Route path='/practice/digest-auth' component={DigestAuth} />
        <Route path='/practice/disappearing-elements' component={DisappearingElements} />
        <Route path='/practice/drag-and-drop' component={DragAndDrop} />
        <Route path='/practice/dropdown' component={Dropdown} />
        <Route path='/practice/dynamic-content' component={DynamicContent} />
        <Route path='/practice/dynamic-controls' component={DynamicControls} />
        <Route path='/practice/dynamic-loading' component={DynamicLoading} />
        <Route path='/practice/entry-ad' component={EntryAd} />
        <Route path='/practice/exit-intent' component={ExitIntent} />
        <Route path='/practice/file-download' component={FileDownload} />
        <Route path='/practice/file-upload' component={FileUpload} />
        <Route path='/practice/floating-menu' component={FloatingMenu} />
        <Route path='/practice/forgot-password' component={ForgotPassword} />
        <Route path='/practice/form-authentication' component={FormAuthentication} />
        <Route path='/practice/frames' component={Frames} />
        <Route path='/practice/geolocation' component={Geolocation} />
        <Route path='/practice/horizontal-slider' component={HorizontalSlider} />
        <Route path='/practice/hovers' component={Hovers} />
        <Route path='/practice/infinite-scroll' component={InfiniteScroll} />
        <Route path='/practice/inputs' component={Inputs} />
        <Route path='/practice/jquery-ui-menus' component={JQueryUIMenus} />
        <Route path='/practice/javascript-alerts' component={JavaScriptAlerts} />
        <Route path='/practice/javascript-error' component={JavaScriptError} />
        <Route path='/practice/key-presses' component={KeyPresses} />
        <Route path='/practice/large-deep-dom' component={LargeDeepDOM} />
        <Route path='/practice/multiple-windows' component={MultipleWindows} />
        <Route path='/practice/nested-frames' component={NestedFrames} />
        <Route path='/practice/notification-messages' component={NotificationMessages} />
        <Route path='/practice/redirect-link' component={RedirectLink} />
        <Route path='/practice/registration-form' component={RegistrationForm} />
        <Route path='/practice/e2e-flow' component={E2EFlow} />
        <Route path='/practice/secure-file-download' component={SecureFileDownload} />
        <Route path='/practice/shadow-dom' component={ShadowDOM} />
        <Route path='/practice/shifting-content' component={ShiftingContent} />
        <Route path='/practice/slow-resources' component={SlowResources} />
        <Route path='/practice/sortable-data-tables' component={SortableDataTables} />
        <Route path='/practice/status-codes' component={StatusCodes} />
        <Route path='/practice/typos' component={Typos} />
        <Route path='/practice/wysiwyg-editor' component={WYSIWYGEditor} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/how-it-works' component={HowItWorks} />
        <Route exact path='/terms-of-use' component={TermsOfUse} />
        <Route exact path='/privacy-policy' component={PrivacyPolicy} />
        <Route exact path='/copyright-notice' component={CopyrightNotice} />
        <Route exact path='/website-disclaimer' component={WebsiteDisclaimer} />
    </Switch>
);
export default Main; 