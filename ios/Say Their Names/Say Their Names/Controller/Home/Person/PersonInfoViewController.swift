//
//  PersonInfoViewController.swift
//  Say Their Names
//
//  Created by Manase on 31/05/2020.
//  Copyright © 2020 Franck-Stephane Ndame Mpouli. All rights reserved.
//

import UIKit

class PersonInfoViewController: UIViewController {

    @IBOutlet weak var mediaCollectionView: UICollectionView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        mediaCollectionView.delegate = self
        mediaCollectionView.dataSource = self
        
        let personPhotoCell = UINib(nibName: "PersonPhotoCell", bundle: nil)
        mediaCollectionView.register(personPhotoCell, forCellWithReuseIdentifier: "PersonPhotoCell")
    }
}

extension PersonInfoViewController: UICollectionViewDataSource, UICollectionViewDelegateFlowLayout {
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return 5
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "PersonPhotoCell", for: indexPath) as! PersonPhotoCell
        return cell
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumLineSpacingForSectionAt section: Int) -> CGFloat {
        return 18
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        return CGSize(width: 135, height: 157)
    }
    
}
