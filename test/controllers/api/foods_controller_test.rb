require 'test_helper'

class Api::FoodsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_foods_index_url
    assert_response :success
  end

  test "should get show" do
    get api_foods_show_url
    assert_response :success
  end

  test "should get create" do
    get api_foods_create_url
    assert_response :success
  end

  test "should get update" do
    get api_foods_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_foods_destroy_url
    assert_response :success
  end

end
