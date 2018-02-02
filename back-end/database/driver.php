<?php 
	/**
	* 
	*/
	class Driver 
	{
		private $hostname;
		private $database;
		private $username;
		private $password;
		private $connection = "pdza";
		
		function __construct(&$arrayName)
		{
			foreach ($arrayName as $key => $val)
			{
				$this->$key = $val;
			}

		}
		public function test(){
			return "gg";
		}
		public function db_connect(){
			
			$this->connection = mysqli_connect($this->hostname, $this->username, $this->password, $this->database);
			return $this->connection;
		}
		public function db_pconnect(){
			return $this->db_connect();

		}
		public function _query($sql){
			return mysqli_query($this->connection, $sql);
		}
		public function _insert($table, $keys, $values){
			return "INSERT INTO ".$table." (".implode(', ', $keys). ") VALUES (".implode(',', $values).")"; 
		}
		public function _update($table, $values, $where, $orderBy = array(), $limit = FALSE){
			foreach ($values as $key => $value) {
				$valstr[] = $key." = ".$value;
			}
			$limit = ( ! $limit) ? '' : ' LIMIT '.$limit;
			$orderBy = (count($orderBy) > 0) ? " ORDER BY " .implode("," , orderBy): '';
			$sql =  "UPDATE ".$table." SET " .implode("," , $valstr);
			$sql .= ($where != '' AND count($where) > 0) ? " WHERE " .implode(" ", $where) : '';
			$sql .= $orderBy.$limit;
			return $sql;
		}

	}
?>
