// import the  libraries 
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

// import from navigation
import { withNavigation } from 'react-navigation';

// StyleSheets

const styles = StyleSheet.create({
  cntView:{
    paddingHorizontal:15,
    paddingTop: 10,
    paddingBottom: 20
  },
  Titles:{

    color: '#0084ff',
    fontFamily: 'Tajawal-Bold',
    fontSize: 18,
  },
  TxtContent:{
    color: '#1d1927',
    fontFamily: 'Tajawal-Regular',
    fontSize: 17,
  },
  TxtLinks:{
    color: '#0084ff',
    fontFamily: 'Tajawal-Regular',
    fontSize: 17,
  }


})

// The main screen
function PrivacyPolicy({ navigation }) {
  return (
      <ScrollView style={styles.cntView}>
        <Text style={styles.Titles}>Politique de confidentialité</Text>
        <Text style={styles.TxtContent}>by-iemo a créé l'application [Alyawmy] en tant qu'application Open Source. Ce SERVICE est fourni par by-iemo sans frais et est destiné à être utilisé tel quel.</Text>
        <Text style={styles.TxtContent}>Cette page est utilisée pour informer les visiteurs de mes politiques concernant la collecte, l'utilisation et la divulgation des informations personnelles si quelqu'un décide d'utiliser mon service.</Text>
        <Text style={styles.TxtContent}>Si vous choisissez d'utiliser mon service, vous acceptez la collecte et l'utilisation d'informations en relation avec cette politique. Les informations personnelles que je collecte sont utilisées pour fournir et améliorer le service. Je n'utiliserai ni ne partagerai vos informations avec personne, sauf comme décrit dans la présente politique de confidentialité.</Text>
        <Text style={styles.TxtContent}>Les termes utilisés dans cette politique de confidentialité ont la même signification que dans nos conditions générales, qui est accessible à [Alyawmy] sauf indication contraire dans la présente politique de confidentialité.</Text>


        <Text style={styles.Titles}>Collecte et utilisation des informations</Text>
        <Text style={styles.TxtContent}>Pour une meilleure expérience, lors de l'utilisation de notre service, je peux vous demander de nous fournir certaines informations personnellement identifiables, y compris mais sans s'y limiter, Muhamed. Les informations que je demande seront conservées sur votre appareil et ne sont en aucun cas collectées par moi.</Text>
        <Text style={styles.TxtContent}>L'application utilise des services tiers qui peuvent collecter des informations utilisées pour vous identifier.</Text>
        <Text style={styles.TxtContent}>Link to privacy policy of third party service providers used by the app</Text>


        <Text style={styles.TxtLinks}>Google Play Services</Text>
        <Text style={styles.TxtLinks}>AdMob</Text>
        <Text style={styles.TxtLinks}>Google Analytics for Firebase</Text>
        <Text style={styles.TxtLinks}>Facebook</Text>
        <Text style={styles.TxtLinks}>Expo</Text>

        <Text style={styles.Titles}>Consigner les données</Text>
        <Text style={styles.TxtContent}>Je tiens à vous informer que chaque fois que vous utilisez mon service, en cas d'erreur dans l'application, je collecte des données et des informations (via des produits tiers) sur votre téléphone, appelé Log Data. Ces données de journal peuvent inclure des informations telles que l'adresse du protocole Internet («IP») de votre appareil, le nom de l'appareil, la version du système d'exploitation, la configuration de l'application lors de l'utilisation de mon service, l'heure et la date de votre utilisation du service et d'autres statistiques. .</Text>
       
       
        <Text style={styles.Titles}>Cookies</Text>
        <Text style={styles.TxtContent}>Les cookies sont des fichiers contenant une petite quantité de données qui sont couramment utilisés comme identifiants uniques anonymes. Ceux-ci sont envoyés à votre navigateur à partir des sites Web que vous visitez et sont stockés dans la mémoire interne de votre appareil.</Text>
        <Text style={styles.TxtContent}>Ce service n'utilise pas ces «cookies» de manière explicite. Cependant, l'application peut utiliser du code tiers et des bibliothèques qui utilisent des «cookies» pour collecter des informations et améliorer leurs services. Vous avez la possibilité d'accepter ou de refuser ces cookies et de savoir quand un cookie est envoyé à votre appareil. Si vous choisissez de refuser nos cookies, vous ne pourrez peut-être pas utiliser certaines parties de ce service.</Text>
        
        
        <Text style={styles.Titles}>Les fournisseurs de services</Text>
        <Text style={styles.TxtContent}>Je peux employer des sociétés et des particuliers tiers pour les raisons suivantes:</Text>
        <Text style={styles.TxtContent}>• Pour faciliter notre service;</Text>
        <Text style={styles.TxtContent}>• Pour fournir le service en notre nom;</Text>
        <Text style={styles.TxtContent}>• Pour effectuer des services liés au service; ou</Text>
        <Text style={styles.TxtContent}>• Pour nous aider à analyser l'utilisation de notre service.</Text>
        <Text style={styles.TxtContent}>Je souhaite informer les utilisateurs de ce service que ces tiers ont accès à vos informations personnelles. La raison est d'accomplir les tâches qui leur sont assignées en notre nom. Cependant, ils sont tenus de ne pas divulguer ou utiliser les informations à d'autres fins.</Text>
        
        
        <Text style={styles.Titles}>Sécurité</Text>
        <Text style={styles.TxtContent}>J'apprécie votre confiance en nous fournissant vos informations personnelles, nous nous efforçons donc d'utiliser des moyens commercialement acceptables pour les protéger. Mais rappelez-vous qu'aucune méthode de transmission sur Internet ou méthode de stockage électronique n'est sûre et fiable à 100%, et je ne peux garantir sa sécurité absolue.</Text>
       
        <Text style={styles.Titles}>Liens vers d'autres sites</Text>
        <Text style={styles.TxtContent}>Ce service peut contenir des liens vers d'autres sites. Si vous cliquez sur un lien tiers, vous serez dirigé vers ce site. Notez que ces sites externes ne sont pas exploités par moi. Par conséquent, je vous conseille fortement de consulter la politique de confidentialité de ces sites Web. Je n'ai aucun contrôle sur et n'assume aucune responsabilité pour le contenu, les politiques de confidentialité ou les pratiques des sites ou services tiers.</Text>
        
        <Text style={styles.Titles}>Confidentialité des enfants</Text>
        <Text style={styles.TxtContent}>Ces services ne s'adressent à personne de moins de 13 ans. Je ne recueille pas sciemment des informations personnellement identifiables d'enfants de moins de 13 ans. Si je découvre qu'un enfant de moins de 13 ans m'a fourni des informations personnelles, je les supprime immédiatement de nos serveurs. Si vous êtes un parent ou un tuteur et que vous savez que votre enfant nous a fourni des informations personnelles, veuillez me contacter afin que je puisse faire les actions nécessaires.</Text>
        
        <Text style={styles.Titles}>Modifications de cette politique de confidentialité</Text>
        <Text style={styles.TxtContent}>Je peux mettre à jour notre politique de confidentialité de temps en temps. Il est donc conseillé de consulter régulièrement cette page pour tout changement. Je vous informerai de tout changement en publiant la nouvelle politique de confidentialité sur cette page.</Text>
        <Text style={styles.TxtContent}>This policy is effective as of 2020-04-30</Text>

        <Text style={styles.Titles}>Nous contacter</Text>
        <Text style={styles.TxtContent}>If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at [contact@alyawmy.by-iemo.com].</Text>
        <View style={{height:30}}>

        </View>
      </ScrollView>

  );
}
export default withNavigation(PrivacyPolicy);