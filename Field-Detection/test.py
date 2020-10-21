import unittest
from main import main
import os

class TestImageHandling(unittest.TestCase):
    
    def __setUp__(self):
        main('input/')

    def testInputDirectory(self):
        self.assertTrue(os.path.isdir('input'))    
        self.assertTrue(os.path.exists('input'))

    # Test if output folder is created
    def testOutputDirectory(self):
        self.assertTrue(os.path.isdir('output'))    
        self.assertTrue(os.path.exists('output'))
    
    # Test if kml files are created
    def testGeneratedFiles(self):
        self.assertTrue(len(os.listdir('output')))      
        self.assertTrue(any(fname.endswith('.kml') for fname in os.listdir('output')))

if __name__ == '__main__':
    unittest.main()