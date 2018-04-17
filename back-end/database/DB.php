<?php
	define("ROOT", $_SERVER['DOCUMENT_ROOT']);
	function get_Names($DB){
        $sql = "SELECT distinct tour_plan_name FROM `attractions`";
        $result = $DB->_query($sql);

        if (mysqli_num_rows($result) > 0) {
            $atts=array();
            while($row = mysqli_fetch_assoc($result)) {
                $name_money =  $row["tour_plan_name"];
                array_push($atts, $name_money);
            }
            echo json_encode($atts);
        } 
        else {
            echo "0 results";
        }
	}
	function get_Tour($name, $DB){
		if(!isset($name) OR count($name) == 0){
			throw new Exception("WRONG REQUEST");
			return;
		}
		
		$sql = "SELECT * FROM `attractions` WHERE tour_plan_name='".$name."'";
       	$result = $DB->_query($sql);
 
        if (mysqli_num_rows($result) > 0) {
            $atts=array();
            while($row = mysqli_fetch_assoc($result)) {
                array_push($atts, $row);
            }
            echo json_encode($atts);
        } 
        else {
            echo "0 results";
        }
	}
	function &DB($file_path)
	{
		if(!file_exists($file_path))
			throw new Exception("FILE NOT FOUND", 1);
		include($file_path);
		if(!isset($db) OR count($db) == 0)
			throw new Exception("NO CONNECTION SETTINGS WERE FOUND IN THE DATABASE CONFIG FILE");

		require_once(ROOT.'/database/driver.php');
		$DB = new Driver($db);
		$conn = $DB->db_connect();
		if(!$conn){
			throw new Exception("UNABLE TO CONNECT TO THE DATABASE");
		}
		switch ($_GET["type"]) {
			case 'GET_NAMES':
				get_Names($DB);
				break;
			case 'GET_TOURS':
				get_Tour($_GET["name"], $DB);
				break;
			
			default:
				throw new Exception("WRONG TYPE");
				break;
		}
	}
	try{
		DB(ROOT.'/config/database.php');
	}
	catch(Exception $e){
		echo "Caught exception: ", $e->getMessage(), "\n";
	}
?>