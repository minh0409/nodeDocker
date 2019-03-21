CREATE TABLE IF NOT EXISTS `task` (
  `Id` varchar(50) NOT NULL,
  `Title` varchar(500) DEFAULT NULL,
  `Status` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `task` (`Id`, `Title`, `Status`) VALUES
('1', 'Configuration management', 'pending'),
('2', 'Deployment', 'pending'),
('3', 'Security', 'pending'),
('4', 'Logging/monitoring', 'pending'),
('5', 'Availability', 'pending'),
('6', 'Scalability', 'pending'),
('7', 'Fault tolerance', 'pending'),
('8', 'Performance under uncertain load', 'pending'),
('9', 'Integration with useful services', 'pending');

