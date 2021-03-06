const atomic_data=[
    {symbol: 'H', atomic_number: 1, ionizationE: 1312, electron_config: [1]},
    {symbol: 'He', atomic_number: 2, ionizationE: 2372.3, electron_config: [2]},
    {symbol: 'Li', atomic_number: 3, ionizationE: 520.2, electron_config: [2,1]},
    {symbol: 'Be', atomic_number: 4, ionizationE: 899.5, electron_config: [2,2]},  
    {symbol: 'B', atomic_number: 5, ionizationE: 800.6, electron_config: [2,2,1]},  
    {symbol: 'C', atomic_number: 6, ionizationE: 1086.5, electron_config: [2,2,2]},  
    {symbol: 'N', atomic_number: 7, ionizationE: 1402.3, electron_config: [2,2,3]},  
    {symbol: 'O', atomic_number: 8, ionizationE: 1313.9, electron_config: [2,2,4]},  
    {symbol: 'F', atomic_number: 9, ionizationE: 1681, electron_config: [2,2,5]},  
    {symbol: 'Ne', atomic_number: 10, ionizationE: 2080.7, electron_config: [2,2,6]},  
    {symbol: 'Na', atomic_number: 11, ionizationE: 495.8, electron_config: [2,2,6,1]},  
    {symbol: 'Mg', atomic_number: 12, ionizationE: 737.7, electron_config: [2,2,6,2]},
    {symbol: 'Al', atomic_number: 13, ionizationE: 577.5, electron_config: [2,2,6,2,1]},
    {symbol: 'Si', atomic_number: 14, ionizationE: 786.5, electron_config: [2,2,6,2,2]},
    {symbol: 'P', atomic_number: 15, ionizationE: 1011.8, electron_config: [2,2,6,2,3]},
    {symbol: 'S', atomic_number: 16, ionizationE: 999.6, electron_config: [2,2,6,2,4]},
    {symbol: 'Cl', atomic_number: 17, ionizationE: 1251.2, electron_config: [2,2,6,2,5]},
    {symbol: 'Ar', atomic_number: 18, ionizationE: 1520.6, electron_config: [2,2,6,2,6]},
    {symbol: 'K', atomic_number: 19, ionizationE: 418.8, electron_config: [2,2,6,2,6,1]},
    {symbol: 'Ca', atomic_number: 20, ionizationE: 589.8, electron_config: [2,2,6,2,6,2]},
    {symbol: 'Sc', atomic_number: 21, ionizationE: 633.1, electron_config: [2,2,6,2,6,2,1]},
    {symbol: 'Ti', atomic_number: 22, ionizationE: 658.8, electron_config: [2,2,6,2,6,2,2]},
    {symbol: 'V', atomic_number: 23, ionizationE: 650.9, electron_config: [2,2,6,2,6,2,3]},
    {symbol: 'Cr', atomic_number: 24, ionizationE: 652.9, electron_config: [2,2,6,2,6,1,5]},
    {symbol: 'Mn', atomic_number: 25, ionizationE: 717.3, electron_config: [2,2,6,2,6,2,5]},
    {symbol: 'Fe', atomic_number: 26, ionizationE: 762.5, electron_config: [2,2,6,2,6,2,6]},
    {symbol: 'Co', atomic_number: 27, ionizationE: 760.4, electron_config: [2,2,6,2,6,2,7]},
    {symbol: 'Ni', atomic_number: 28, ionizationE: 737.1, electron_config: [2,2,6,2,6,2,8]},
    {symbol: 'Cu', atomic_number: 29, ionizationE: 745.5, electron_config: [2,2,6,2,6,1,10]},
    {symbol: 'Zn', atomic_number: 30, ionizationE: 906.4, electron_config: [2,2,6,2,6,2,10]},
    {symbol: 'Ga', atomic_number: 31, ionizationE: 578.8, electron_config: [2,2,6,2,6,2,10,1]},
    {symbol: 'Ge', atomic_number: 32, ionizationE: 762, electron_config: [2,2,6,2,6,2,10,2]},
    {symbol: 'As', atomic_number: 33, ionizationE: 947, electron_config: [2,2,6,2,6,2,10,3]},
    {symbol: 'Se', atomic_number: 34, ionizationE: 941, electron_config: [2,2,6,2,6,2,10,4]},
    {symbol: 'Br', atomic_number: 35, ionizationE: 1139.9, electron_config: [2,2,6,2,6,2,10,5]},
    {symbol: 'Kr', atomic_number: 36, ionizationE: 1350.8, electron_config: [2,2,6,2,6,2,10,6]},
    {symbol: 'Rb', atomic_number: 37, ionizationE: 403, electron_config: [2,2,6,2,6,2,10,6,1]},
    {symbol: 'Sr', atomic_number: 38, ionizationE: 549.5, electron_config: [2,2,6,2,6,2,10,6,2]},
    {symbol: 'Y', atomic_number: 39, ionizationE: 600, electron_config: [2,2,6,2,6,2,10,6,2,1]},
    {symbol: 'Zr', atomic_number: 40, ionizationE: 640.1, electron_config: [2,2,6,2,6,2,10,6,2,2]},
    {symbol: 'Nb', atomic_number: 41, ionizationE: 652.1, electron_config: [2,2,6,2,6,2,10,6,1,4]},
    {symbol: 'Mo', atomic_number: 42, ionizationE: 684.3, electron_config: [2,2,6,2,6,2,10,6,1,5]},
    {symbol: 'Tc', atomic_number: 43, ionizationE: 702, electron_config: [2,2,6,2,6,2,10,6,2,5]},
    {symbol: 'Ru', atomic_number: 44, ionizationE: 710.2, electron_config: [2,2,6,2,6,2,10,6,1,7]},
    {symbol: 'Rh', atomic_number: 45, ionizationE: 719.7, electron_config: [2,2,6,2,6,2,10,6,1,8]},
    {symbol: 'Pd', atomic_number: 46, ionizationE: 804.4, electron_config: [2,2,6,2,6,2,10,6,0,10]},
    {symbol: 'Ag', atomic_number: 47, ionizationE: 731, electron_config: [2,2,6,2,6,2,10,6,1,10]},
    {symbol: 'Cd', atomic_number: 48, ionizationE: 867.8, electron_config: [2,2,6,2,6,2,10,6,2,10]},
    {symbol: 'In', atomic_number: 49, ionizationE: 558.3, electron_config: [2,2,6,2,6,2,10,6,2,10,1]},
    {symbol: 'Sn', atomic_number: 50, ionizationE: 708.6, electron_config: [2,2,6,2,6,2,10,6,2,10,2]},
    {symbol: 'Sb', atomic_number: 51, ionizationE: 834, electron_config: [2,2,6,2,6,2,10,6,2,10,3]},
    {symbol: 'Te', atomic_number: 52, ionizationE: 869.3, electron_config: [2,2,6,2,6,2,10,6,2,10,4]},
    {symbol: 'I', atomic_number: 53, ionizationE: 1008.4, electron_config: [2,2,6,2,6,2,10,6,2,10,5]},
    {symbol: 'Xe', atomic_number: 54, ionizationE: 1170.4, electron_config: [2,2,6,2,6,2,10,6,2,10,6]},
    {symbol: 'Cs', atomic_number: 55, ionizationE: 375.7, electron_config: [2,2,6,2,6,2,10,6,2,10,6,1]},
    {symbol: 'Ba', atomic_number: 56, ionizationE: 502.9, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2]},
    {symbol: 'La', atomic_number: 57, ionizationE: 538.1, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,0,1]},
    {symbol: 'Ce', atomic_number: 58, ionizationE: 534.4, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,1,1]},
    {symbol: 'Pr', atomic_number: 59, ionizationE: 527, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,3]},
    {symbol: 'Nd', atomic_number: 60, ionizationE: 533.1, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,4]},
    {symbol: 'Pm', atomic_number: 61, ionizationE: 540, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,5]},
    {symbol: 'Sm', atomic_number: 62, ionizationE: 544.5, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,6]},
    {symbol: 'Eu', atomic_number: 63, ionizationE: 547.1, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,7]},
    {symbol: 'Gd', atomic_number: 64, ionizationE: 593.4, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,7,1]},
    {symbol: 'Tb', atomic_number: 65, ionizationE: 565.8, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,9]},
    {symbol: 'Dy', atomic_number: 66, ionizationE: 573, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,10]},
    {symbol: 'Ho', atomic_number: 67, ionizationE: 581, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,11]},
    {symbol: 'Er', atomic_number: 68, ionizationE: 589.3, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,12]},
    {symbol: 'Tm', atomic_number: 69, ionizationE: 596.7, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,13]},
    {symbol: 'Yb', atomic_number: 70, ionizationE: 603.4, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14]},
    {symbol: 'Lu', atomic_number: 71, ionizationE: 523.5, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,1]},
    {symbol: 'Hf', atomic_number: 72, ionizationE: 658.5, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,2]},
    {symbol: 'Ta', atomic_number: 73, ionizationE: 761, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,3]},
    {symbol: 'W', atomic_number: 74, ionizationE: 770, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,4]},
    {symbol: 'Re', atomic_number: 75, ionizationE: 760, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,5]},
    {symbol: 'Os', atomic_number: 76, ionizationE: 840, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,6]},
    {symbol: 'Ir', atomic_number: 77, ionizationE: 880, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,7]},
    {symbol: 'Pt', atomic_number: 78, ionizationE: 870, electron_config: [2,2,6,2,6,2,10,6,2,10,6,1,14,9]},
    {symbol: 'Au', atomic_number: 79, ionizationE: 890.1, electron_config: [2,2,6,2,6,2,10,6,2,10,6,1,14,10]},
    {symbol: 'Hg', atomic_number: 80, ionizationE: 1007.1, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10]},
    {symbol: 'Tl', atomic_number: 81, ionizationE: 589.4, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,1]},
    {symbol: 'Pb', atomic_number: 82, ionizationE: 715.6, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,2]},
    {symbol: 'Bi', atomic_number: 83, ionizationE: 703, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,3]},
    {symbol: 'Po', atomic_number: 84, ionizationE: 812.1, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,4]},
    {symbol: 'At', atomic_number: 85, ionizationE: 899, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,5]},
    {symbol: 'Rn', atomic_number: 86, ionizationE: 1037, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6]},
    {symbol: 'Fr', atomic_number: 87, ionizationE: 380, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,1]},
    {symbol: 'Ra', atomic_number: 88, ionizationE: 509.3, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2]},
    {symbol: 'Ac', atomic_number: 89, ionizationE: 499, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,0,1]},
    {symbol: 'Th', atomic_number: 90, ionizationE: 587, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,0,2]},
    {symbol: 'Pa', atomic_number: 91, ionizationE: 568, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,2,1]},
    {symbol: 'U', atomic_number: 92, ionizationE: 597.6, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,3,1]},
    {symbol: 'Np', atomic_number: 93, ionizationE: 604.5, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,4,1]},
    {symbol: 'Pu', atomic_number: 94, ionizationE: 584.7, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,6]},
    {symbol: 'Am', atomic_number: 95, ionizationE: 578, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,7]},
    {symbol: 'Cm', atomic_number: 96, ionizationE: 603.4, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,7,1]},
    {symbol: 'Bk', atomic_number: 97, ionizationE: 601, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,9]},
    {symbol: 'Cf', atomic_number: 98, ionizationE: 608, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,10]},
    {symbol: 'Es', atomic_number: 99, ionizationE: 619, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,11]},
    {symbol: 'Fm', atomic_number: 100, ionizationE: 627, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,12]},
    {symbol: 'Md', atomic_number: 101, ionizationE: 635, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,13]},
    {symbol: 'No', atomic_number: 102, ionizationE: 642, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,14]},
    {symbol: 'Lr', atomic_number: 103, ionizationE: 470, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,14,0,1]},
    {symbol: 'Rf', atomic_number: 104, ionizationE: 580, electron_config: [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,14,2]},
]