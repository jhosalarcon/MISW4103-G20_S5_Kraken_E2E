Feature: Escenarios de prueba e2e

@user1 @web
Scenario: caso 1 Como usuario deseo cambiar la contrasena de mi cuenta
 Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
 When I enter email "<Email>"
 And I enter password "<OldPass>"
 And I click next
 And I click settings icon
 And I click Staff icon
 And I click on user info
 And I enter the old password "<OldPass>"
 And I enter the new password "<NewPass>"
 And I verify the new password "<NewPass>"
 And I change the password
 And I wait for 8 seconds  And I go to logout
 And I press the button sign out
 And I enter email "<Email>"
 And I enter password "<NewPass>"
 And I click next
 And I click settings icon
 And I click Staff icon
 And I click on user info
 And I enter the old password "<NewPass>"
 And I enter the new password "<OldPass>"
 And I verify the new password "<OldPass>"
 And I change the password


@user2 @web
Scenario: caso 2 Como usuario deseo exportar, eliminar e importar contenido
 Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
 When I enter email "<Email>"
 And I enter password "<OldPass>"
 And I click next
 And I click settings icon
 And I click Labs icon
 And I click on export icon
 And I wait for 4 seconds
 And I click on delete icon
 And I confirm delete content
 And I wait for 4 seconds
 And I validate deleted content

@user3 @web
Scenario: caso 3 Como usuario deseo crear, editar y archivar un newsletter
 Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
 When I enter email "<Email>"
 And I enter password "<OldPass>"
 And I click next
 And I click settings icon
 And I add a newsletter
 And I wait for 2 seconds
 And I validate new newsletter
 And I edit a newsletter
 And I wait for 2 seconds
 And I validate edit newsletter
 And I archive newsletter
 And I wait for 2 seconds

@user4 @web
Scenario: caso 4 Como usuario deseo agregar un code injection a mi sitio
 Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
 When I enter email "<Email>"
 And I enter password "<OldPass>"
 And I click next
 And I click settings icon
 And I add code injection
 And I wait for 2 seconds
 And I navigate to page "http://localhost:2368/"
 And I validate code injection

@user5 @web
Scenario: caso 5 Como usuario deseo agregar un announcement bar
 Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
 When I enter email "<Email>"
 And I enter password "<OldPass>"
 And I click next
 And I click settings icon
 And I add announcement bar
 And I wait for 2 seconds
 And I navigate to page "http://localhost:2368/"
 And I validate announcement bar

@user6 @web
Scenario: caso 6 Modificar y validar acciones de mi perfil de ghost
Given I navigate to page "http://localhost:2368/ghost"
When I enter email "<Email>"
And I enter password "<OldPass>"
And I click next
And I wait for 2 seconds
And I click my avatar
And I click my profile
And I wait for 2 seconds
And I clear my name
And I type my new name
And I clear my sludge
And I type my new sludge
And I clear my country
And I type my new country
And I wait for 2 seconds
And I save my profile edited
And I click on staff
And I wait for 3 seconds
Then I validate my new name
And I click my edited profile
And I wait for 2 seconds
And I clear my name
And I type my old name
And I clear my sludge
And I type my old sludge
And I clear my country
And I type my old country
And I save my profile edited
And I click on staff
And I wait for 3 seconds
Then I validate my old name

@user7 @web
Scenario: caso 7 Importar miembros desde un archivo csv
Given I navigate to page "http://localhost:2368/ghost"
When I enter email "<Email>"
And I enter password "<OldPass>"
And I click next
And I wait for 2 seconds
And I click on members
And I wait for 2 seconds
And I click on member actions
And I wait for 2 seconds
And I click on import members
And I wait for 2 seconds


@user8 @web
Scenario: caso 8 Crear un miembro negativo en ghost
Given I navigate to page "http://localhost:2368/ghost"
When I enter email "<Email>"
And I enter password "<OldPass>"
And I click next
And I wait for 2 seconds
And I click on members
And I wait for 2 seconds
And I create a new bad member
And I wait for 2 seconds
And I type my bad member name
And I type my bad member email
And I type my bad member note
And I click to save my bad member
Then I validate the bad response
And I wait for 2 seconds
And I click member leave
And I wait for 2 seconds
And I click leave form
And I wait for 2 seconds
Then I validate bad member doesnt exist
And I wait for 2 seconds




@user9 @web
Scenario: caso 9 Editar un miembro negativo en ghost
Given I navigate to page "http://localhost:2368/ghost"
When I enter email "<Email>"
And I enter password "<OldPass>"
And I click next
And I wait for 2 seconds
And I click on members
And I wait for 2 seconds
And I edit a bad member
And I wait for 2 seconds
And I clear my bad member name
And I type my bad member name
And I clear my bad member email
And I type my bad member email
And I clear my bad member note
And I type my bad member note
And I click to save my bad member
Then I validate the bad response
And I wait for 2 seconds
And I click on members
And I wait for 2 seconds
And I click leave form
And I wait for 2 seconds
Then I validate bad member doesnt change
And I wait for 2 seconds





@user10 @web
Scenario: caso 10 buscar en la barra de busqueda
Given I navigate to page "http://localhost:2368/ghost"
When I enter email "<Email>"
And I enter password "<OldPass>"
And I click next
And I wait for 2 seconds
And I click on searchbar
And I wait for 2 seconds
And I type on the searchbar
And I wait for 5 seconds
And I click on the results
And I wait for 2 seconds
Then I validate the results of the searchbar
			
			
@user16 @web
Scenario: caso 16 Admin - crear editar y eliminar mi post
Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
And I enter email "pruebas@correo.com"
And I wait for 2 seconds
And I enter password "abcde12345"
And I wait for 2 seconds
And I click next
And I wait for 2 seconds
And I click post icon
And I wait for 2 seconds
And I enter a title "E2E Post"
And I wait for 2 seconds
  And I click bodys
  And I wait for 2 seconds
  And I enter a body "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eros in libero sagittis, at ornare leo rhoncus. Duis odio mauris, blandit ut blandit eu, luctus eu eros. Morbi quis massa in ante gravida posuere condimentum et dui. Mauris eu interdum urna. Nullam arcu ante, elementum at leo id, tincidunt sodales tellus. Etiam placerat enim et nisl tincidunt, vel aliquam leo ornare."
  And I wait for 2 seconds
  And I click publish
  And I wait for 2 seconds
  And I click publish post
  And I wait for 2 seconds
  And I confirm the publish
  And I wait for 2 seconds
  And I click on back to editor
  And I wait for 2 seconds
  And I click on title to edit it
  And I wait for 2 seconds
  And I enter a new title "EDITED"
  And I wait for 2 seconds
  And I click bodys again
  And I wait for 2 seconds
  And I enter a new body "EDITED/EDITED/EDITED"
  And I wait for 2 seconds
  And I click update
  And I wait for 2 seconds
  And I click settings post
  And I click delete post
  Then I click confirm

 @user17 @web
 Scenario: caso 17 TimeZone
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I enter email "pruebas@correo.com"
  And I wait for 1 seconds
  And I enter password "abcde12345"
  And I wait for 1 seconds
  And I click next
  And I wait for 1 seconds
  And I click settings
  And I wait for 3 seconds
  And I click on edit Timezone
  And I write on search "TimeZone"
  And I click on edit
  And I click UTC
  And I wait for 3 seconds
  And I write new UTC "Bogota"
  And I save it
  Then I wait for 5 seconds

 @user18 @web
 Scenario: caso 18 XCard
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I enter email "pruebas@correo.com"
  And I wait for 1 seconds
  And I enter password "abcde12345"
  And I wait for 1 seconds
  And I click next
  And I wait for 1 seconds
  And I click settings
  And I wait for 3 seconds
  And I click on Search
  And I write on search "X"
  And I wait for 4 seconds
  And I click on editX
  And I click on Xtitle
  And I write a Xtitle "Pruebas automatizadas X Card"
  And I wait for 2 seconds
  And I write a XBody "Cuerpo de X card"
  And I wait for 2 seconds
  And I click on XSave
  And I wait for 2 seconds


 @user19 @web
 Scenario: caso 19 MetaCard
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I enter email "pruebas@correo.com"
  And I wait for 1 seconds
  And I enter password "abcde12345"
  And I wait for 1 seconds
  And I click next
  And I wait for 1 seconds
  And I click settings
  And I wait for 3 seconds
  And I click on Search
  And I write on search "meta"
  And I wait for 4 seconds
  And I click on editMeta
  And I click on Metatitle
  And I write a Metatitle "Pruebas automatizadas Meta Card"
  And I wait for 2 seconds
  And I write a MetaBody "Cuerpo de Meta card"
  And I wait for 2 seconds
  And I click on MetaSave
  And I wait for 2 seconds

 @user20 @web
 Scenario: caso 20 FacebookCard
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I enter email "pruebas@correo.com"
  And I wait for 1 seconds
  And I enter password "abcde12345"
  And I wait for 1 seconds
  And I click next
  And I wait for 1 seconds
  And I click settings
  And I wait for 3 seconds
  And I click on Search
  And I write on search "facebook"
  And I wait for 4 seconds
  And I click on editFB
  And I click on FBtitle
  And I write a FBtitle "Pruebas automatizadas Meta Card"
  And I wait for 2 seconds
  And I write a FBBody "Cuerpo de Meta card"
  And I wait for 2 seconds
  And I click on FBSave
  And I wait for 2 seconds


