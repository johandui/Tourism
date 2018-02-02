<?php 
	/**
	* 
	*/
	class Tour 
	{
		public $attname;
		public $price;
		public $url;
		public $lat;
		public $lng;
		public $tour_plan_name;
		
		function __construct(&$arrayName)
		{
			foreach ($arrayName as $key => $val)
			{
				$this->$key = $val;
			}
		}

	}
?>
