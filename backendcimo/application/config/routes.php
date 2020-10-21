<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

$route['log_in'] = "login_and_signup/log_in";
$route['sign_up'] = "login_and_signup/sign_up";
$route['register_videoconference'] = "Register_cimo_pacient/register_videoconference";
$route['register_chatconference'] = "Register_cimo_pacient/register_chatconference";
$route['payment'] = "Payment/payment";
$route['user_info'] = "User_info/user_info";
$route['user_update'] = "User_info/user_update";
$route['manage_video'] = "Manage_appoiment/get_video_appoiment";
$route['accept_videoconference'] = "Manage_appoiment/accept_video";
$route['manage_chat'] = "Manage_appoiment/get_chat_appoiment";
$route['accept_chatconference'] = "Manage_appoiment/accept_chat";

//user_update

$route['get_profession'] = "Profession_and_specialization/get_profession";
$route['get_users_pacients'] = "Users_controller/pacients";
$route['get_users_doctors'] = "Users_controller/doctors";
$route['get_users_administrators'] = "Users_controller/administrators";
$route['get_user_information'] = "Users_controller/get_user_information";
$route['get_doctor_information'] = "Users_controller/get_doctor_information";
$route['update_user'] = "Users_controller/update_user";
$route['delete_user'] = "Users_controller/delete_user";
$route['delete_doctor'] = "Users_controller/delete_doctor";


